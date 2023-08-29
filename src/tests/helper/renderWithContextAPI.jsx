import { render } from '@testing-library/react';
import Context from '../../context/Context';
import Provider from '../../context/Provider';
import React from 'react';

const renderWithContextAPI = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <Provider {...providerProps}>
      <Context.Consumer>
        {(contextValue) => React.cloneElement(ui, { contextValue })}
      </Context.Consumer>
    </Provider>,
    renderOptions
  );
};

export default renderWithContextAPI;