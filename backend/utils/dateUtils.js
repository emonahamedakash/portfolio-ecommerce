import {
  format,
  parseISO,
  addDays,
  addMonths,
  isBefore,
  isAfter,
  isToday,
  differenceInDays,
  startOfDay,
  endOfDay,
} from "date-fns";
import { format as formatTz, utcToZonedTime } from "date-fns-tz";

const PRODUCT_TIMEZONE = "America/New_York";

export {
  format,
  parseISO,
  addDays,
  addMonths,
  isBefore,
  isAfter,
  isToday,
  differenceInDays,
  startOfDay,
  endOfDay,
  formatTz,
  utcToZonedTime,
  PRODUCT_TIMEZONE,
};
