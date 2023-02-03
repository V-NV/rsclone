export function View():void {
    const Body = document.querySelector('body') as HTMLBodyElement;
    
    const Header = document.createElement('header');
    Body.insertAdjacentElement('afterbegin', Header);
    
    const Main = document.createElement('main');
    Body.insertAdjacentElement('beforeend', Main);

    const Footer = document.createElement('footer');
    Body.insertAdjacentElement('beforeend', Footer);
}