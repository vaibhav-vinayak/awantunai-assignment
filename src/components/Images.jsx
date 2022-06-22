import styled from "styled-components";

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Thumbnail = styled.img`
  height: 40px;
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 32px;
`;

const Images = ({ images }) => (
  <ImagesContainer>
    {images.data?.map(({ thumbnailUrl, title }, id) => (
      <ThumbnailContainer key={id}>
        <Thumbnail src={thumbnailUrl} alt={title} />
      </ThumbnailContainer>
    ))}
  </ImagesContainer>
);

export default Images;
