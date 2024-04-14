// eslint-disable-next-line max-classes-per-file
import { screen } from '@testing-library/react';
import { Router } from './Router';
import { Page } from '../../pages/Page';
import { componentRender } from '@/shared/lib/helpers/tests/componentRender/componentRender';
import AppRouter from '../../../../../app/providers/router/ui/AppRouter';
import { getRouteExcel } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

class MockDashboardPage extends Page {
    getRoot() {
        const root = document.createElement('div');
        root.innerHTML = 'dashboard';
        return root;
    }
}

class MockExcelPage extends Page {
    getRoot() {
        const root = document.createElement('div');
        root.innerHTML = 'ExcelPage';
        return root;
    }
}

const tempWindow = window;

// const runEnvCallback = (callback, project = 'jest') => {
//     return function (...args) {
//         if (__PROJECT__ === project) {
//             callback(...args);
//         }
//     };
// };
// const setLocationValue = (value) => {
//     runEnvCallback(() => {
//         window = Object.create(window);
//
//         Object.defineProperty(window, 'location', {
//             value,
//             writable: true,
//         });
//     })();
// };

// eslint-disable-next-line consistent-return
export const runEnvCallback = (callback, project = 'jest') => {
    if (__PROJECT__ === project) {
        return callback();
    }
};
export const setLocationValue = (value) => {
    // https://stackoverflow.com/questions/54021037/how-to-mock-window-location-href-with-jest-vuejs
    // eslint-disable-next-line no-global-assign
    window = Object.create(window);

    Object.defineProperty(window, 'location', {
        value,
        writable: true,
    });
};

describe('Router with mock pages', () => {
    let router;
    let $root;

    const createRoot = () => {
        $root = document.createElement('div');
        router = new Router($root, {
            dashboard: MockDashboardPage,
            excel: MockExcelPage,
        });
    };

    afterEach(() => {
        // eslint-disable-next-line no-global-assign
        window = tempWindow;
    });

    test('should be defined', () => {
        createRoot();

        expect(router).toBeDefined();
    });

    test('should render Dashboard Page', () => {
        // setLocationValue({
        //     hash: '#some',
        // });
        runEnvCallback(() => {
            setLocationValue({
                hash: '#some',
            });
        });
        createRoot();

        expect($root.innerHTML).toBe('<div>dashboard</div>');
    });

    test('should render ExcelPage', () => {
        // setLocationValue({
        //     hash: '#excel/1712347254068',
        // });
        runEnvCallback(() => {
            setLocationValue({
                hash: '#excel/1712347254068',
            });
        });
        createRoot();

        expect($root.innerHTML).toBe('<div>ExcelPage</div>');
    });
});

describe('Router:', () => {
    const findPage = async (dataTestId) => {
        const page = await screen.findByTestId(dataTestId);
        expect(page).toBeInTheDocument();
    };

    afterEach(() => {
        // eslint-disable-next-line no-global-assign
        window = tempWindow;
    });

    test('should render ExcelPage', async () => {
        // setLocationValue({
        //     hash: '#excel/1712347254068',
        // });
        runEnvCallback(() => {
            setLocationValue({
                hash: '#excel/1712347254068',
            });
        });
        componentRender(<AppRouter />, {
            route: {
                pathname: getRouteExcel(),
                // hash: `#excel/1712347254068`, // dont work, use setLocationValue
            },

            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        await findPage('ExcelPage');
        await findPage('Excel');
    });

    test('should render Dashboard Page', async () => {
        // setLocationValue({
        //     hash: '#some',
        // });

        runEnvCallback(() => {
            setLocationValue({
                hash: '#some',
            });
        });

        componentRender(<AppRouter />, {
            route: {
                pathname: getRouteExcel(),
            },
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        await findPage('ExcelPage');
        await findPage('Dashboard');
    });
});
