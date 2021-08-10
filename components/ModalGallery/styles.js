import styled from "styled-components"

export const ModalGalleryContainer = styled.div`
    
height: 100vh;
width: 100vw;
position: fixed;
z-index: 1000;
background: black;
top: 0;
display: grid;
grid-template-rows: 2rem auto 2rem;
grid-template-columns: 100vw;
div{
    display: flex;
    height: 100%;
    transition: transform 1s;
    transform: ${(({page})=>'translate(-'+page*50+'vw)')};
    div{
        width: 100vw;
        display: flex;
        flex-shrink: 0;
        justify-content: center;
        img{
            object-fit: contain;
            width: 100%;
            max-width: 45rem;
            max-height: 100vh;
        }
    }
}
label{
    width: 100%;
    color: white;
    text-align: center;
}
`

export const CloseModalGallery = styled.button`
appearance: none;
border: none;
background: none;
color: white;
font-size: 2rem;
width: 100%;
text-align: end; 
padding-right: 1rem;
`

export const ChangeImageButton = styled.button`
position: absolute;
top: 50%;
right: ${(({isRight})=>isRight?"17px":"")};
border: none;
outline: none;
background: transparent;
font-size: 2rem;
font-weight: 800;
background: #fff;
border-radius: 9999px;
height: 2rem;
display: flex;
align-items: center;
`