import * as Dialog from "@radix-ui/react-dialog";

const Modal = ({ modal, onClose }) => {
  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4 z-40 ">
          <div className="bg-white rounded-md shadow-lg dark:bg-gray-500">
            <div className="flex items-center justify-between p-4 border-b">
              <Dialog.Title className="text-lg font-medium text-gray-800 uppercase dark:text-white">
                {modal?.brand} {modal?.model} Detayları
              </Dialog.Title>
            </div>
            <Dialog.Description className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500 dark:text-white">
              <p>Fiyat: {modal?.price}₺</p>
              <p>Yıl: {modal?.year}</p>
              <p>Vites: {modal?.gear}</p>
              <p>Kasko: {modal?.insurance}</p>
              <p>Açıklama: {modal?.info}</p>
            </Dialog.Description>
            <div className="flex items-center gap-3 p-4 border-t">
              <Dialog.Close asChild>
                <button
                  className="px-6 py-2 m-auto text-white border bg-dark-red rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                  aria-label="Close"
                  onClick={onClose}
                >
                  Kapat
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default Modal;
