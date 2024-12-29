import App from '../../src/App';
import { render } from '@testing-library/react-native';

describe('<App />', () => {
    test('Expect user able to see onboarding screen', () => {
        const { getByText } = render(<App />);
        getByText('Welcome, User');
    });
});