const HEAD = (
    <div
        style={{
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            border: "5px solid black",
            position: "absolute",
            top: "30px",
            right: "-20px",
        }}
    />
)

const BODY = (
    <div
        style={{
            width: "5px",
            height: "80px",
            background: "black",
            position: "absolute",
            top: "70px",
            right: 0,
        }}
    />
)

const RIGHT_ARM = (
    <div
        style={{
            width: "70px",
            height: "5px",
            background: "black",
            position: "absolute",
            top: "100px",
            right: "-70px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
        }}
    />
)

const LEFT_ARM = (
    <div
        style={{
            width: "70px",
            height: "5px",
            background: "black",
            position: "absolute",
            top: "100px",
            right: "5px",
            rotate: "30deg",
            transformOrigin: "right bottom",
        }}
    />
)

const RIGHT_LEG = (
    <div
        style={{
            width: "70px",
            height: "5px",
            background: "black",
            position: "absolute",
            top: "140px",
            right: "-65px",
            rotate: "60deg",
            transformOrigin: "left bottom",
        }}
    />
)

const LEFT_LEG = (
    <div
        style={{
            width: "70px",
            height: "5px",
            background: "black",
            position: "absolute",
            top: "140px",
            right: 0,
            rotate: "-60deg",
            transformOrigin: "right bottom",
        }}
    />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
    return (
        <div style={{ position: 'relative' }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div
                style={{
                    height: "30px",
                    width: "5px",
                    background: "black",
                    position: "absolute",
                    top: 0,
                    right: 0,
                }}
            />
            <div
                style={{
                    height: "5px",
                    width: "150px",
                    background: "black",
                    marginLeft: "75px",
                }}
            />
            <div
                style={{
                    height: "250px",
                    width: "5px",
                    background: "black",
                    marginLeft: "75px",
                }}
            />
            <div style={{ height: "5px", width: "150px", background: "black" }} />
        </div>
    )
}

export default HangmanDrawing