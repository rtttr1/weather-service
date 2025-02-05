import { IcSearch } from '@/assets/svg';
import Input from '@/common/components/Input';
import Text from '@/common/components/Text';
import {
  cityListTextStyle,
  cityListWrapperStyle,
  containerStyle,
  searchedCityStyle,
} from '@/components/SearchCity/index.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useEffect, useState } from 'react';

interface SearchCityProps {
  handleSelectedCity: (city: string) => void;
  handleCountry: (country: string) => void;
}

const SearchCity = ({ handleSelectedCity, handleCountry }: SearchCityProps) => {
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);

  const [open, setOpen] = useState(false);

  const handleInputChange = (value: string) => {
    setCity(value);
  };

  const handleClose = () => {
    setOpen(false);
    setCity('');
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const ref = useOutsideClick(handleClose);

  const handleCityClick = (city: string, country: string) => {
    handleSelectedCity(city);
    handleCountry(country);
    setCity('');
    handleClose();
  };

  useEffect(() => {
    if (!city) return;

    fetch(
      `${import.meta.env.VITE_WEATHER_API_BASE_URL}/search.json?q=${city}&key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`,
    )
      .then((response) => {
        return response.json(); // response에 저장되어있는 JSon 메서드를 사용하여 json 객체 자동변환 가능
      })
      .then((data) => setCityList(data));
  }, [city]);

  return (
    <div className={containerStyle} ref={ref}>
      <ul className={cityListWrapperStyle({ open })}>
        {cityList.length !== 0 ? (
          cityList?.map((data, index) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              key={`${index}-${data.name}`}
              className={searchedCityStyle}
              onClick={() => handleCityClick(data.name, data.country)}
            >
              <Text fontTag="b3" color="gray" className={cityListTextStyle}>
                {data.name}
              </Text>
            </div>
          ))
        ) : (
          <div>빈칸</div>
        )}
      </ul>
      <Input
        variant="primary"
        placeholder={'Search for places...'}
        prevIcon={<IcSearch width={16} />}
        value={city}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={handleOpen}
      />
    </div>
  );
};

export default SearchCity;
