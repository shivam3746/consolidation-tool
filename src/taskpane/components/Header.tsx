import * as React from "react";

//import "./Header.css";

// export interface HeaderProps {
//   title: string;
//   logo: string;
//   message: string;
// }

// export default class Header extends React.Component<HeaderProps> {
//   render() {
//     const { title, logo, message } = this.props;

//     return (
//       <section className="ms-bgColor-neutralLighter ms-u-fadeIn700">
//         <img width="40" height="40" src={logo} alt={title} title={title} />
//         <h1 className="ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary">{message}</h1>
//       </section>
//     );
//   }
// }

function Header(){

  return(
    <header className="Header">
      <img src={require("/assets/logo-filled.png")} width="40" height="40" className="Logo" alt="logo"/>
      <nav className="Nav">
        <a href="/" className="item_1">Home</a>
        <a href="/" className="item_2">Articles</a>
        <a href="/" className="item_3">About</a>
        <button>Logout</button>
      </nav>

    </header>
  )

}

export default Header;