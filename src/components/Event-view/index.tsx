import { memo, type FC } from "react";
import type { IEvent } from "../../types";

interface IData {
    data: IEvent[];
}

const EventView: FC<IData> = ({ data }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white">
            <h1 className="text-4xl font-bold mb-10 text-white/90 tracking-wide">
                Ish ro‘yxati
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl">
                {data.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] border border-white/20 hover:scale-[1.03] transition-transform duration-300 hover:bg-white/15"
                    >
                        <h2 className="text-2xl font-semibold mb-3 text-white/90">
                            {event.event_name}
                        </h2>
                        <div className="space-y-2 text-white/80 text-sm">
                            <p>
                                <span className="text-white/60">Mehmonlar soni:</span>{" "}
                                <span className="font-medium">{event.number_of_guests}</span>
                            </p>
                            <p>
                                <span className="text-white/60">Ofitsiantlar soni:</span>{" "}
                                <span className="font-medium">{event.number_of_waiters}</span>
                            </p>
                            <p>
                                <span className="text-white/60">Sana:</span>{" "}
                                <span className="font-medium">{event.date}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(EventView);
