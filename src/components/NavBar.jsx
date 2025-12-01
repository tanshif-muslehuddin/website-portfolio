import {navIcons, navLinks} from "#constants/index.js";
import dayjs from "dayjs";

const NavBar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="MacOS Logo"/>

                <p className="font-bold">Tanshif's Portfolio</p>

                <ul>
                    {
                        navLinks.map(({id, name}) => (
                            <li key={id}>
                                <p>{name}</p>
                            </li>
                            )
                        )
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        navIcons.map(({id, img, alt}) => (
                            <li key={id}>
                                <img src={img} className="icon-hover" alt={alt}></img>
                            </li>
                            )
                        )
                    }
                </ul>

                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>


        </nav>
    );
};
export default NavBar
