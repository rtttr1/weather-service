import { IcSearch } from '@/assets/svg';
import Input from '@/common/components/Input';
import {
  cityListTextStyle,
  cityListWrapperStyle,
  containerStyle,
  searchTextStyle,
} from '@/components/SearchCity/index.css';
import useGetCities from '@/hooks/useGetCities';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useState } from 'react';

import type { searchResponseTypes } from '@/types';
import type { KeyboardEvent } from 'react';
import Text from '@/common/components/Text';

interface SearchCityProps {
  handleSelectedCity: (city: string) => void;
  handleCountry: (country: string) => void;
}

const SearchCity = ({ handleSelectedCity, handleCountry }: SearchCityProps) => {
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);

  const { serachedCities } = useGetCities(city);

  const handleInputChange = (value: string) => {
    setCity(value);
  };

  const handleSearchClose = () => {
    setOpen(false);
    setCity('');
  };

  const handleSearchOpen = () => {
    setOpen(true);
    setCity('');
  };

  const handleCityClick = (city: string, country: string) => {
    handleSelectedCity(city);
    handleCountry(country);
    setCity('');
    handleSearchClose();
  };

  const handleEnterKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    city: string,
    country: string,
  ) => {
    if (e.key === 'Enter') {
      handleCityClick(city, country);
    }
  };

  const ref = useOutsideClick(handleSearchClose);

  return (
    <div className={containerStyle} ref={ref}>
      <ul className={cityListWrapperStyle({ open })}>
        {serachedCities.length > 0 ? (
          serachedCities?.map((data: searchResponseTypes, index) => (
            <li key={`${index}-${data.name}`}>
              <button
                type="button"
                onClick={() => handleCityClick(data.name, data.country)}
                onKeyDown={(e) =>
                  handleEnterKeyDown(e, data.name, data.country)
                }
                className={cityListTextStyle}
              >
                {data.name}
              </button>
            </li>
          ))
        ) : (
          <Text fontTag="b3" color="gray" className={searchTextStyle}>
            Search for the name of the city{' '}
          </Text>
        )}
      </ul>
      <Input
        variant="primary"
        placeholder={'Search for places...'}
        prevIcon={<IcSearch width={16} />}
        value={city}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={handleSearchOpen}
      />
    </div>
  );
};

export default SearchCity;
