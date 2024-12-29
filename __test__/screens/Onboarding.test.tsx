import { renderWithProviders } from '@/lib/test-utils';
import { AppNavigation } from '@/navigation';
import { Onboarding } from '@/screens';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';

describe('<Onboarding />', () => {
    test('Expect user able to see onboarding screen', () => {
        const { getByText } = renderWithProviders(<Onboarding />);
        getByText('Welcome, User');
    });

    test('Expect user able to navigate and see login form ', async () => {
        renderWithProviders(
            <AppNavigation />
        );

        fireEvent.press(screen.getByText('Get Started'))
        expect(screen.getByText('Login')).toBeDefined();

    });
});