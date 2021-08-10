import { ChangeImageButton, CloseModalGallery, ModalGalleryContainer } from "./styles";

export function ModalGallery({galleryPage, galleryImages, handleGalleryImages, handleGalleryPage}){

    return(
        <ModalGalleryContainer page={galleryPage} >
            <CloseModalGallery onClick={()=>handleGalleryImages(false)} ><i className="far fa-times-circle"></i></CloseModalGallery> 
            <div>
                {
                    galleryImages.map((image)=>(
                        <div>
                            <img src={`./images/${image}.png`} />
                        </div>
                    ))
                }
            </div>
            <ChangeImageButton
                disabled={galleryPage===0}
                onClick={()=>handleGalleryPage()} 
            >
                {"<"}
            </ChangeImageButton>
            <ChangeImageButton 
                disabled={galleryPage+1===galleryImages.length}
                onClick={()=>handleGalleryPage(true)} 
                isRight={true} 
            >
                {">"}
            </ChangeImageButton>
            <label> {galleryPage+1} de {galleryImages.length}</label>
        </ModalGalleryContainer>
    )
}