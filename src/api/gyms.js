import instance from "./config";

export const fetchGymByPlaces = async () => {
    try {
        const res = await instance.get(`/gym/places`)
        return res.data
    }
    catch (err) {
        return err
    }
}

export const fetchGymByCoordinates = async (lat,long) => {
    try {
        const res = await instance.get(`/gym/nearestgym?lat=${lat}&long=${long}`)
        return res.data
    }
    catch (err) {
        return err
    }
}