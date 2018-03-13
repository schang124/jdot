import * as React from 'react';
interface InitialContext {
  pathname: string;
  query: object;
  asPath: any;
  req?: any;
  res?: any;
  jsonPageRes?: any;
  err: any;
}

interface IndexProps{
  pathname: string;
}

class Index extends React.Component<IndexProps, {}> {
  public static getInitialProps(context: InitialContext): IndexProps {
    return {
      pathname: context.pathname
    }
  }
  
  render() {
    return(
      <div>Index Component: {this.props.pathname}</div>
    );
  }
}

export default Index