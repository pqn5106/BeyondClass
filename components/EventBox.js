"use client"
import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import EventPlaceHolder from '@/public/images/JPMorganPlaceholder.png'
import { useRouter } from 'next/navigation'

const EventBox = (image, month, day, title, tags, description, link) => {

    const [eventImage, setEventImage] = useState(EventPlaceHolder);
    const [eventMonth, setMonth] = useState("Jun");
    const [eventDay, setDay] = useState('25');
    const [eventTitle, setEventTitle] = useState("JP Morgan Healthcare Week 2023");
    const [eventTags, setTags] = useState([{title:'Professional', color:"#e9e6e6"}, {title:'Important', color:'#e9e6e6'},{title: 'Fun',color:'#e9e6e6'}]);
    const [eventDescription, setDescription] = useState('JP Morgan | Finance | On-Site');
    const [eventLink, setLink] = useState('google.com');
    
    
    return (
        <EventContainer>
            <ImageContainer>
                <Image src={eventImage}/>
            </ImageContainer>
            <TextContainer>
                <DateContainer>
                    <DateMonth>{eventMonth}</DateMonth>
                    <DateDay>{eventDay}</DateDay>
                </DateContainer>
                <DescContainer>
                    <DescTitle>{eventTitle}</DescTitle>
                    <Description>{eventDescription}</Description>
                    <TagsContainer>{eventTags.map((tag, key) => {
                        return <TagTextCont key={key} $bgColor={tag.color}>{tag.title}</TagTextCont>})}
                    </TagsContainer>
                </DescContainer>
            </TextContainer>
            
        </EventContainer>
    );
}

const EventContainer = styled.div `
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    margin: 10px;
    width: 50vw;
    height: 35vh;
    overflow: hidden;
`

const ImageContainer = styled.div`
    max-width: 100%; /* Ensures the image doesn't overflow the container width-wise */
    height: 60%; /* Image takes up 50% of the container's height */
    object-fit: contain; /* Ensures the aspect ratio of the image is maintained */
    overflow: hidden;
    aspect-ratio: 20 / 17;

`

const TextContainer = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    height: 40%;

`

const DateContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 25%;
    align-items: center;
    justify-content: flex-start;
`

const DateMonth = styled.p `
    color: #3D37F1;
    font: 'DM Sans';
    font-size: 1.0vw;
    font-weight: bold;
`

const DateDay = styled.p `
    color: black;
    font: 'DM Sans'; 
    font-size: 2.0vw;
    font-weight: semi-bold;
`

const DescContainer = styled.div `
    display: flex;
    flex-direction: column;
    width:75%;
`

const DescTitle = styled.h3 `
    color: black;
    font: 'DM Sans';
    font-size: 1vw;
    font-weight: bolder;
`
const Description = styled.h3 `
    color: grey;
    font: 'DM Sans';
    font-size: 0.8vw;
    font-weight: normal;
`

const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const TagTextCont = styled.div`
  position: relative;
  z-index: 1;
  font-size: 0.7vw;
  font-weight: bold;
  margin: 3px;
  padding: 2px;

  
  &:before {
    border-radius: 0.3vw;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.$bgColor || 'grey'};
    z-index: -1;
  }
`;


export default EventBox