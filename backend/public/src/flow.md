**Flow Chart of Containers and Components**
//sending function down: once named ie: selectPlayer={this.selectPlayer}
//next send until use - send it like: selectPlayer={selectPlayer}
App.js
- Main Page
  - Sign In link to Sign UP - changes user state
  - does my main page have side bar of entries?
- Header.js
  - MenuBar.js
  - Sign UP link/button
  - Sign In link/button
  - About link
- Public Notes - side bar  <--add to backend
  - viewing one --- contemplating if want
- About page

- User Page
  - User Header(?) (sub header)
  - Logout button
  - create an Entry
  - Side Bar of Journal Entries
    - list title with location
    - first "15 characters" on content
    - show a thumbnail photo? <-- add to backend option to set
  - Individual Journal Entry
    - Title
    - content
    - Location
    - photos
      - (set a photo as main or randomize which photo displays in snippet?) <--add to backend
    - public or private <-- need to add to backend
    - drafts
    - update entry link

    ---
    NOTES:
    want to clear current note ?
    want to get username of who wrote note (remember note attached by userId)

---
*EditNoteForm*
import FormText from "reactstrap"
<FormGroup>
  <Label for="exampleFile">Upload File</Label>
  <Input type="file" name="file" id="exampleFile" />
  <FormText color="muted">
    This is some placeholder block-level help text for the above input.
    It's a bit lighter and easily wraps to a new line.
  </FormText>
</FormGroup>
<FormGroup tag="fieldset">
  <legend>Radio Buttons</legend>
  <FormGroup check>
    <Label check>
      <Input type="radio" name="radio1" />{' '}
      Set Journal Entry to Private
    </Label>
  </FormGroup>
  <FormGroup check>
    <Label check>
      <Input type="radio" name="radio1" />{' '}
      Journal Entry is Private
    </Label>
  </FormGroup>
  <FormGroup check disabled>
    <Label check>
      <Input type="radio" name="radio1" disabled />{' '}
      Option three is disabled
    </Label>
  </FormGroup>
</FormGroup>
<FormGroup check>
  <Label check>
    <Input type="checkbox" />{' '}
    Check me out
  </Label>
</FormGroup>

---
CreateNoteForm
import FormText from reactstrap
 <FormGroup>
  <Label for="exampleFile">Upload File</Label>
  <Input type="file" name="file" id="exampleFile" />
  <FormText color="muted">
    This is some placeholder block-level help text for the above input.
    It's a bit lighter and easily wraps to a new line.
  </FormText>
</FormGroup>
<FormGroup tag="fieldset">
  <legend>Radio Buttons</legend>
  <FormGroup check>
    <Label check>
      <Input type="radio" name="radio1" />{' '}
      Set Journal Entry to Private
    </Label>
  </FormGroup>
  <FormGroup check>
    <Label check>
      <Input type="radio" name="radio1" />{' '}
      Journal Entry is Private
    </Label>
  </FormGroup>
  <FormGroup check disabled>
    <Label check>
      <Input type="radio" name="radio1" disabled />{' '}
      Option three is disabled
    </Label>
  </FormGroup>
</FormGroup>
<FormGroup check>
  <Label check>
    <Input type="checkbox" />{' '}
    Check me out
  </Label>
</FormGroup>
