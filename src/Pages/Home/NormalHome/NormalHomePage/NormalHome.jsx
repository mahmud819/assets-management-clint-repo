import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import NormalBanner from '../NormalBanner/NormalBanner';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import NormalAbout from '../NormalAbout/NormalAbout';
import AboutPakage from '../AboutPakage/AboutPakage';

const NormalHome = () => {
    const{user} = useContext(AuthContext);
    return (
        <div>
            {!user?.email&&<NormalBanner></NormalBanner>}
            <NormalAbout></NormalAbout>
            <AboutPakage></AboutPakage>
        </div>
    );
};

export default NormalHome;