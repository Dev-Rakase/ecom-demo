import { Home } from '@/screens';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { ActivityIndicator } from 'react-native';
import { useProductHook } from '@/hooks/useProductHook';
import { NavigationContainer } from '@react-navigation/native';

jest.mock("@/hooks/useProductHook")

const useProductHookMock = jest.mocked(useProductHook);
const data = {
    isLoading: false,
    error: null,
    isError: false,
    refetch: jest.fn(),
    data: {
        rows: [{
            title: 'Test Product',
            description: 'This is a test product.',
            price: '19.99',
        }]
    }
}

describe('<Home />', () => {


    test('Expect user able to see loading', async () => {
        useProductHookMock.mockImplementation(() => ({ ...data, isLoading: true }))
        render(
            <NavigationContainer>
                <Home />
            </NavigationContainer>
        );

        expect(ActivityIndicator).toBeDefined();
        expect(useProductHookMock).toHaveBeenCalled()


    });

    test('Expect user able to see product', async () => {
        useProductHookMock.mockImplementation(() => data)
        render(
            <NavigationContainer>
                <Home />
            </NavigationContainer>
        );

        expect(useProductHookMock).toHaveBeenCalled()

        await waitFor(() => {
            expect(screen.getByText('Test Product')).toBeDefined();
            expect(screen.getByText('19.99')).toBeDefined();
        });
    });

    test('Expect user able to see error', async () => {
        useProductHookMock.mockImplementation(() => ({ ...data, isError: true, error: { message: "Error", name: "" } }))
        render(
            <NavigationContainer>
                <Home />
            </NavigationContainer>
        );

        expect(useProductHookMock).toHaveBeenCalled()

        await waitFor(() => {
            expect(screen.getByText('Error')).toBeDefined();
            expect(screen.getByText('Reload')).toBeDefined();
        });
    });

    test('Expect user able to navigate detail screen', async () => {
        useProductHookMock.mockImplementation(() => data)
        const { getByText } = render(
            <NavigationContainer>
                <Home />
            </NavigationContainer>
        );

        expect(useProductHookMock).toHaveBeenCalled()

        await waitFor(() => {
            expect(screen.getByText('Test Product')).toBeDefined();
        });
    });
});