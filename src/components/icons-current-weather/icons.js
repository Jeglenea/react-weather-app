import ClearDay from './clear-day';
import ClearNight from './clear-night';
import CloudyDay from './cloudy-day';
import CloudyNight from './cloudy-night';
import DrizzleDay from './drizzle-day';
import DrizzleNight from './drizzle-night';
import MistDay from './mist-day';
import MistNight from './mist-night';
import OvercastDay from './overcast-day';
import OvercastNight from './overcast-night';
import PartlyCloudyDay from './partly-cloudy-day';
import PartlyCloudyNight from './partly-cloudy-night';
import RainDay from './rain-day';
import RainNight from './rain-night';
import SnowDay from './snow-day';
import SnowNight from './snow-night';
import ThunderDay from './thunder-day';
import ThunderNight from './thunder-night';

const icons = {
  '01d': ClearDay,
  '01n': ClearNight,
  '02d': PartlyCloudyDay,
  '02n': PartlyCloudyNight,
  '03d': CloudyDay,
  '03n': CloudyNight,
  '04d': OvercastDay,
  '04n': OvercastNight,
  '09d': RainDay,
  '09n': RainNight,
  '10d': DrizzleDay,
  '10n': DrizzleNight,
  '11d': ThunderDay,
  '11n': ThunderNight,
  '13d': SnowDay,
  '13n': SnowNight,
  '50d': MistDay,
  '50n': MistNight,
};

export default icons;