import { Button } from '@/components/Button';
import App from '../../src/App';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('<Button />', () => {
    test('Expect Button render with children', () => {
        const { getByText } = render(<Button><Text>Button</Text></Button>);
        getByText('Button');
    });


});