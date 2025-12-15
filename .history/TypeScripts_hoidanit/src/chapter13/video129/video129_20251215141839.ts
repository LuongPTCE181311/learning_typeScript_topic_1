export {};

interface IDataString {
    data: string;
}

interface IData<T> {
    data: T;
}

const a: IData<string> = {data: "huhu"}
const b: IData<number> = {data: 123}

interface IAPIResponse<T>{
    status: number;
    data: T;
}

const fetchDataUser = () => {
    const fetchData = fetch("http://localhost:8000/users");
    const data = fetchData.
}