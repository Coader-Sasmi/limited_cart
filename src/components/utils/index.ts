/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

//? SET To LocalStorage
export const saveToLocalStorage = (key: any, value: any) => {
  if (typeof window !== "undefined") localStorage.setItem(key, value);
};

//? GET From LocalStorage
export const getFromLocalStorage = (key: any) =>
  typeof window !== "undefined" ? localStorage.getItem(key) ?? null : null;

//? Remove from LocalStorage
export const removeFromLocalStorage = (key: any) => {
  if (typeof window !== "undefined") localStorage.removeItem(key);
};

//? get discount
export const getDiscountValue = (MRP: number, salePrice: number) =>
  (((MRP - salePrice) / MRP) * 100).toFixed(0);

//? currency formatter
export const currencyFormatter = (value: number) => {
  return new Intl.NumberFormat("ar-AE", {
    style: "currency",
    currency: "AED",
  }).format(value);
};

// get hour from minutes
// export const convertMinutesToHours = (minutes: number) => {
//   var hours = Math.floor(minutes / 60);
//   var remainingMinutes = minutes % 60;

//   if (hours == 0) return remainingMinutes + " min";
//   else return hours + " hr " + remainingMinutes + " min";
// };

// string to hr,min, and AM

export const formatTime = (timeString: string) => {
  if (!timeString) {
    return "";
  }

  const [hours, minutes] = timeString.split(":").map(Number);

  return dayjs().set("hour", hours).set("minute", minutes).format("h:mm A");
};
export const convertTimeStringToHours = (timeString: string) => {
  const [hours, minutes] = timeString.split(":").map(Number);

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12

  const hoursPart = hours > 0 ? `${formattedHours}hr` : "";
  const minutesPart = minutes > 0 ? `${minutes}min` : "";

  return `${hoursPart} ${minutesPart} ${period}`;
};

//? Toggle Full Screen Function
export const toggleFullScreen = (
  isFullScreen: boolean,
  setIsFullScreen: Dispatch<SetStateAction<boolean>>
) => {
  const element = document.documentElement as any;
  const newDoc = document as any;
  if (!isFullScreen) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
  } else {
    if (newDoc.exitFullscreen) newDoc.exitFullscreen();
    else if (newDoc.mozCancelFullScreen) newDoc.mozCancelFullScreen();
    else if (newDoc.webkitExitFullscreen) newDoc.webkitExitFullscreen();
    else if (newDoc.msExitFullscreen) newDoc.msExitFullscreen();
  }
  setIsFullScreen(!isFullScreen);
};

//? Sweet Alert Style
export const sweetAlertStyles = {
  container: "...",
  popup: "swal-container",
  title: "swal-title",
  closeButton: "...",
  icon: "...",
  image: "...",
  htmlContainer: "...",
  input: "...",
  inputLabel: "...",
  validationMessage: "...",
  actions: "...",
  confirmButton: `swal-confirm-button`,
  denyButton: "...",
  cancelButton: `swal-cancel-button`,
  loader: "...",
  footer: "...",
  timerProgressBar: "...",
};

export const sweetAlertCustomStyles =
  "rgba(76, 78, 100, 0.2) 0px 6px 6px -3px, rgba(76, 78, 100, 0.14) 0px 10px 14px 1px, rgba(76, 78, 100, 0.12) 0px 4px 18px 3px;";

export const convertObj = (
  type: "date" | "id",
  value: { $oid?: string; $date?: string }
) => {
  if (type === "date") return value?.["$date"];
  else if (type === "id") return value?.["$oid"];
};

//? Random Color
export const getRandomColor = (a: number) => {
  const getRandomChannelValue = () => Math.floor(Math.random() * 216);
  const r = getRandomChannelValue();
  const g = getRandomChannelValue();
  const b = getRandomChannelValue();
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

//? Greetings
export const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 1 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 14) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

//? Geo Location
type GeoLocation = {
  latitude: number;
  longitude: number;
};

export const getGeoLocation = (): Promise<GeoLocation> => {
  return new Promise((resolve, reject) => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        function (error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              return reject(new Error("User denied request for Geolocation."));
            case error.POSITION_UNAVAILABLE:
              return reject(new Error("Location information is unavailable."));
            case error.TIMEOUT:
              return reject(
                new Error("The request to get user location timed out.")
              );
            default:
              reject(new Error("An unknown error occurred."));
          }
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by your browser."));
    }
  });
};

const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";

// Function to get the address from latitude and longitude
export const getAddressFromLatLng = async ({ latitude, longitude }: any) => {
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === "OK" && data.results.length > 0) {
      const address = data.results[0].formatted_address;
      console.log("Address:", address);
      return address;
    } else {
      console.error("Error fetching address:", data.status);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// const lat = 20.1863;
// const lng = 85.6223;

// const {data} = useSwr(`?format=json&lat=${lat}&lon=${lng}`, {
// BASE_URL:`https://nominatim.openstreetmap.org/reverse`
// })

//? FormatCash
export const formatCash = (n: number) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(3) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(3) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(3) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(3) + "T";
};

//? Date Range Filter
export const getData = (selectedTitle: string) => {
  const currentDate = new Date();
  let startDate, endDate;

  switch (selectedTitle) {
    case "Last 7 Days":
      startDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      endDate = currentDate;
      break;

    case "Last Week":
      startDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      endDate = new Date(
        currentDate.getTime() - currentDate.getDay() * 24 * 60 * 60 * 1000
      );
      break;

    case "Last 30 Days":
      startDate = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
      endDate = currentDate;
      break;

    case "Last Month":
      startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      );
      endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      break;

    case "This Month":
      startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      endDate = currentDate;
      break;

    default:
      break;
  }
  // console.log('Start Date:', startDate);
  // console.log('End Date:', endDate);
  return { startDate, endDate };
};
