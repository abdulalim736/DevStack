import type { Technology } from "../../Types";

interface SidebarProps {
    stack: Technology[];
    handleRemoveFromStack: (id: string) => void
    handleRemoveAll: () => void
}

const Sidebar = ({ stack, handleRemoveFromStack, handleRemoveAll }: SidebarProps) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 sticky top-24">
            <h2 className="text-xl font-bold mb-2">Your Stack</h2>
            <p className="text-sm text-gray-500 mb-6">{stack.length} Technology Selected</p>
            {stack.length === 0 ? (
                <div className="text-center text-gray-400 py-10">
                    <p>Your stack is empty.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {stack.map((item) => (
                        <div key={item.id} className="flex justify-between items-center bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3">
                                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                                <div>
                                    <h4 className="font-semibold text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.category}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromStack(item.id)}
                                className="text-gray-400 hover:text-red-500 font-bold"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={handleRemoveAll}
                        className="w-full mt-4 py-2 border-2 border-red-100 text-red-500 font-bold rounded-lg hover:bg-red-50 transition"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Sidebar;