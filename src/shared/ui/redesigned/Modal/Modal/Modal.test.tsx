/* CodiumAI Testing */
// Generated by CodiumAI
// yes but regenerated 10 times more, and it doesn't describe cases with transition
// cant see onClose timeout (require waitFor)
// Other features
// /improve - does not grasp the context, offers irrelevant solutions
// /explain -superficially explains
// /find-similar (available only in webStorm) - doesn't work for me
// /docstring - so so norm , in Modal.tsx
// chat - syntax errors, silly suggestions, except base problems

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
    // Renders a modal with given props when isOpen is true
    it('should render modal when isOpen is true', () => {
        // Arrange
        const props = {
            isOpen: true,
            onClose: jest.fn(),
        };

        // Act
        render(<Modal {...props} />);

        // Assert
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    // Closes the modal when Overlay is clicked

    it('should close modal with transition! when Overlay is clicked', async () => {
        // Arrange
        const onClose = jest.fn();
        const props = {
            isOpen: true,
            onClose,
        };
        render(<Modal {...props} />);

        // Act
        fireEvent.click(screen.getByTestId('overlay'));

        // Assert
        expect(screen.getByTestId('modalContent')).toHaveClass('isClosing');

        await waitFor(() => {
            expect(onClose).toHaveBeenCalled();
        });
    });

    // Applies the correct className based on isOpen prop
    it('should apply correct className based on isOpen prop and transition began', () => {
        // Arrange
        const props = {
            isOpen: true,
            onClose: jest.fn(),
        };
        render(<Modal {...props} />);

        // Assert
        expect(screen.getByTestId('modal')).toHaveClass('opened');
        expect(screen.getByTestId('modalContent')).toHaveClass('in');
    });

    // Renders nothing when isOpen is false
    it('should not render anything when isOpen is false', () => {
        // Arrange
        const props = {
            isOpen: false,
            onClose: jest.fn(),
            lazy: true,
        };

        // Act
        render(<Modal {...props} />);

        // Assert
        expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });
});