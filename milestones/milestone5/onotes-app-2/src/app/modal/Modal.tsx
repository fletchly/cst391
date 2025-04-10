interface ModalProps {
  isOpen: boolean;
  toggle(state: boolean): void;
  action(): void;
  content: {
    title: string;
    ok: string;
    cancel: string;
  };
}

export function Modal({ isOpen, toggle, action, content }: ModalProps) {
  return (
    <>
      <div
        className={`${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-150 fixed inset-0 bg-gray-400/25 backdrop-blur-[2px] flex justify-center items-start pt-20 z-50`}
        onClick={() => toggle(false)}
      >
        <div
          className={"bg-white w-96 p-5 rounded-md shadow-lg relative"}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={"flex justify-between items-center"}>
            <div className={"text-xl text-gray-800"}>{content.title}</div>
          </div>

          <div className={"flex justify-end mt-4"}>
            <button
              className="hover:inset-shadow-sm cursor-pointer text-md hover:text-red-500 text-gray-500 active:text-white active:bg-red-500 rounded-md bg-gray-200 px-2 py-1 transition-all mx-1"
              onClick={action}
            >
              {content.ok}
            </button>
            <button
              className="hover:inset-shadow-sm cursor-pointer text-md hover:text-gray-800 text-gray-500 active:text-white active:bg-gray-800 rounded-md bg-gray-200 px-2 py-1 transition-all mx-1"
              onClick={() => toggle(false)}
            >
              {content.cancel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
