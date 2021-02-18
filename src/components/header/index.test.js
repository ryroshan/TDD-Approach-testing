import '../../../src/setupTests'
import { shallow } from 'enzyme';
import { findAttr } from '../../utils/index';
import Header from './index';


const setUp = ()=>{
    const component = shallow(<Header />)
    return component;
}


describe('Header Component', ()=>{

    let component;
    beforeEach(()=>{
        component = setUp();
    })


    it('Header render without fail', ()=>{
        const wrpper = findAttr(component, 'headerComponent')
        expect(wrpper.length).toBe(1);
    })  


    it('Should render logo',()=>{
        const logo = findAttr(component, 'logoIMG')
        expect(logo.length).toBe(1);
    })


})