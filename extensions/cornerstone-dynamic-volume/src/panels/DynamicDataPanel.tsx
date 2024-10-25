import React from 'react';
import PanelGenerateImage from './PanelGenerateImage';
import { Separator } from '@ohif/ui-next';

function DynamicDataPanel({ servicesManager, commandsManager, tab }: withAppTypes) {
  return (
    <>
      <div
        className="flex flex-col text-white"
        data-cy={'dynamic-volume-panel'}
      >
        <PanelGenerateImage
          commandsManager={commandsManager}
          servicesManager={servicesManager}
        ></PanelGenerateImage>
      </div>
    </>
  );
}

export default DynamicDataPanel;
