import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import NormalBanner from '../NormalBanner/NormalBanner';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const NormalHome = () => {
    const{user} = useContext(AuthContext);
    return (
        <div>
            {!user?.email&&<NormalBanner></NormalBanner>}
        </div>
    );
};

export default NormalHome;