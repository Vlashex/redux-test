import * as React from 'react';
import './app.scss'

export interface IAppProps {
}

export interface IAppState {
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div className='app'>
        <h1>Hi</h1>
      </div>
    );
  }
}
