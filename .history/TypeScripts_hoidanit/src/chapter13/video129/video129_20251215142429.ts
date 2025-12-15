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

interface IUser {
    id: number;
    name: string;
    email: string;
}

const fetchDataUser = async () => {
    const fetchData = await fetch("http://localhost:8000/users");
    const dataAPI = await fetchData.json() as IUser[];

    const result: IAPIResponse<IUser[]> = {
        status: 200,
        data: dataAPI
    }

    result.data.map(item => item.)
}