import { shallow } from 'enzyme';
import Headline from './index';
import { findAttr } from '../../../utils/index';

describe('Headline Component',()=>{

    const setUp = ()=>{
        const component = shallow(<Headline />)
        return component;
    }

    let component;
        beforeEach(()=>{
            component = setUp();
        })

    it('Should render heading',()=>{

        const wrapper = findAttr(component, 'heading_h');
        expect(wrapper.length).toBe(1);

    })

    it('Should render decription',()=>{
        const wrapper = findAttr(component, 'decription');
        expect(wrapper.length).toBe(1);
    })

})