import Test from "../Test";

const MainPage = () => {
    const defaultCount="5"

    return (
        <div>
            MainPage
            <div>
                Text
                < Test defaultCount={defaultCount }   />
            </div>
        </div>
    );
};

export default MainPage;
