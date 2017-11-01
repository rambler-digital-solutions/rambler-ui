import React, {Component} from 'react'
import { ApplyTheme } from 'rambler-ui/theme'
import {
  H1,
  H2,
  H3,
  Text,
  Quote,
  Epigraph,
  Source,
  Timestamp,
  Description,
  GalleryDescription,
  PhotoSource,
  List
} from 'rambler-ui/Typography'


export default class TypographyExample extends Component {
  render() {
    return (
      <ApplyTheme>
        <div>
          <H1>Heading level 1</H1>
          <H2>Heading level 2</H2>
          <H3>Heading level 3</H3>
          <Text>Text Text Text Text Text Text</Text>
          <Quote>Quote Quote Quote</Quote>
          <Quote>
            <p>First paragraph</p>
            <p>Second paragraph</p>
          </Quote>
          <Epigraph>Epigraph Epigraph Epigraph</Epigraph>
          <Description>Description Description Description</Description>
          <GalleryDescription>GalleryDescription GalleryDescription GalleryDescription</GalleryDescription>

          <Source>Source Source Source</Source>
          <br/>
          <Timestamp>Timestamp Timestamp Timestamp</Timestamp>
          <br/>
          <PhotoSource>PhotoSource PhotoSource PhotoSource</PhotoSource>
          
          <List>
            <li>Unordered list</li>
            <li>Unordered list</li>
            <li>Unordered<br/>list</li>
          </List>
          <List numbered={true}>
            <li>Ordered list</li>
            <li>Ordered list</li>
            <li>Ordered<br/>list</li>
          </List>
        </div>
      </ApplyTheme>
    )
  }
}
