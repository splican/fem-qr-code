import qrCode from "./image-qr-code.png"

export default function QrContainer() {
    return (
        <main>
            <div>
                <img src={qrCode} alt="qr code"></img>
                <h3>Improve your front-end skills by building projects</h3>
                <p>Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </main>
    );
};