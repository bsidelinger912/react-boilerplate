/**
 * @class List
 * @description
 */

import React, { useEffect, useState } from 'react';

export interface Props {
  width: number;
  height: number;
  imagesPerPage: number;
}

interface Image {
  id: string;
}

const imageBaseUrl = 'https://picsum.photos/id/'; // 1544/1024
const listUrl = 'https://picsum.photos/v2/list';

const List: React.FC<Props> = ({ width, height, imagesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<string[]>([]);

  const fetchData = async (): Promise<void> => {
    console.log('**** fetching');
    // TODO: doesn't seem to get limit correctly
    const resp = await fetch(`${listUrl}?page=${currentPage}&limit=${imagesPerPage}`)
      .then((resp: any) => resp.json()) as Image[];

    const mappedImages = resp.map((item) => `${imageBaseUrl}${item.id}/${width}/${height}`);
    setImages(mappedImages);
  };

  useEffect(() => {
    fetchData();
  }, [width, height, imagesPerPage, currentPage]);

  return (
    <div>
      <div>
        <button type="button" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous Page</button>
        <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
      </div>
      {images.map((image) => <img key={image} src={image} alt={image} />)}
    </div>
  );
};

export default List;
