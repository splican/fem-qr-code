import qrCode from "./image-qr-code.png"

export default function QrContainer() {
    return (
        <main className="h-[100svh] flex justify-center items-center bg-slate-400">
            <div className="flex flex-col items-center rounded-lg bg-white w-1/3 p-4">
                <img className="w-64 rounded-lg" src={qrCode} alt="qr code"></img>
                <section>
                    <h3 className="font-bold text-lg m-4 text-center">Improve your front-end <br /> skills by building projects</h3>
                    <p className="text-center text-sm">Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level</p>
                </section>
            </div>
        </main>
    );
};