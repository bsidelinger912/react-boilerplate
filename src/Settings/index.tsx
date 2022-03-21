/**
 * @class Settings
 * @description
 */

import React from 'react';
import { heightLabel, imagesPerPageLabel, widthLabel } from '../text';

export interface Props {
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setImagesPerPage: (imagesPerPage: number) => void;
}

const Settings: React.FC<Props> = ({ setImagesPerPage, setWidth, setHeight }) => {
  console.log('leave me alone eslin');

  return (
    <div>
      <label htmlFor="width">
        {widthLabel}
        <input
          id="width"
          name="height"
          onChange={(e) => {
            try {
              const numberValue = parseInt(e.target.value.trim(), 10);
              setWidth(numberValue);
            } catch (err) {
              console.error('failed to parseInt on width');
            }
          }}
        />
      </label>

      <label htmlFor="height">
        {heightLabel}
        <input
          id="height"
          name="height"
          onChange={(e) => {
            try {
              const numberValue = parseInt(e.target.value.trim(), 10);
              setHeight(numberValue);
            } catch (err) {
              console.error('failed to parseInt on width');
            }
          }}
        />
      </label>

      <label htmlFor="imagesPerPage">
        {imagesPerPageLabel}
        <input
          id="imagesPerPage"
          name="imagesPerPage"
          onChange={(e) => {
            try {
              const numberValue = parseInt(e.target.value.trim(), 10);
              setImagesPerPage(numberValue);
            } catch (err) {
              console.error('failed to parseInt on width');
            }
          }}
        />
      </label>
    </div>
  );
};

export default Settings;
