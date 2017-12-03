import React from 'react';
import renderer from 'react-test-renderer';
import TimeStamp from '../../timeStamp';

describe('TimeStamp', () => {
    it('render correctly', () => {
        const date = new Date('Sun Dec 03 2017 19:48:55 GMT+0545 (+0545)');
        const time = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const timestamp = renderer.create(<TimeStamp time={time}/>).toJSON();

        expect(timestamp.children.length).toBe(1);
        expect(timestamp).toMatchSnapshot();
    });
});