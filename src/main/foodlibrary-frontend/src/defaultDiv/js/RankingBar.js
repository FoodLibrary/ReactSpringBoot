import React, {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup, Row, ButtonDropdown} from 'reactstrap';
import '../css/RankingBarStyle.css';
import TopBar from "./TopBar";
import Container from "reactstrap/es/Container";


const RankingBar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
        return (
            <Container>
                <Row>
                    <ButtonGroup className={"rankingToggleMenu"}>
                        <Button className={"rankingButton"}>랭킹</Button>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret className={"rankingToggle"}>
                                실시간 검색어 순위
                            </DropdownToggle>
                            <DropdownMenu id={"rankingToggle"}>
                                <DropdownItem>Foo Action</DropdownItem>
                                <DropdownItem>Bar Action</DropdownItem>
                                <DropdownItem>Quo Action</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </ButtonGroup>
                </Row>

            </Container>

        );

}

export default RankingBar;