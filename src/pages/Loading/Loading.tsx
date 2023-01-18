import { LoadingContainer, PhotoLoading, TitleLoading } from "./styles"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import MyPhoto from '../../assets/my-photo.png'
import { Loader } from "./components/Loader"

export function Loading() {
    const navigate = useNavigate();
    function nextPage() {
        setTimeout(function () { navigate('/home') }, 3000);
    }

    useEffect(() => {
        nextPage();
    }, [])

    return (
        <LoadingContainer>
            <PhotoLoading src={MyPhoto} />
            <TitleLoading>Welcome ;)</TitleLoading>
            <Loader />
        </LoadingContainer>
    )
}