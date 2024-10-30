import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';

import { Button } from '../ui/button';
import { DialogHeader, DialogFooter, DialogDescription } from '../ui/dialog';

type Props = {
    isModalOpen: boolean;
    toggleModal: () => void;
    title?: string;
    body: ReactNode;
    onSave: () => void;
};

const Modal = ({ isModalOpen, toggleModal, body, onSave, title }: Props) => {
    return (
        <div className="relative">
            <Dialog open={isModalOpen} onOpenChange={toggleModal}>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-10" />
                )}
                <DialogContent className="flex flex-col justify-center items-center fixed inset-0 z-20 bg-neutral-50 p-6 rounded-xl h-fit w-[90vw] sm:w-fit sm:max-w-fit m-auto border shadow-sm  max-h-[95vh] overflow-y-auto">
                    <DialogHeader className="text-left capitalize text-xl font-semibold flex w-full justify-start mb-4">
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{''}</DialogDescription>
                    </DialogHeader>
                    {body}
                    <DialogFooter className="flex justify-end w-full gap-2 mt-4">
                        <Button
                            onClick={() => toggleModal()}
                            variant={'outline'}
                        >
                            Cancel
                        </Button>
                        <Button onClick={() => onSave()} type="button">
                            Get Trial
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Modal;
