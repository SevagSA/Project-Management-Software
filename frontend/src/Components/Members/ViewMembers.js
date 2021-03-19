import { useState } from 'react'
import taskViewStyles from "../Task/ViewTasks/Styles"
import { members, roles } from "../../DummyData";
import ProfileCard from "../Widgets/ProfileCard/ProfileCard";

export default function ViewMembers() {
    const [searchResults, setSearchResults] = useState(members);

    const searchMemberByName = (e) => {
        const query = e.target.value.toLowerCase();
        const result = members.filter(e => e.name.toLowerCase().includes(query));
        setSearchResults(result);
    };

    const searchMemberByRole = (e) => {
        let query = e.target.value.toLowerCase();
        const result = members.filter(e => e.role.toLowerCase() === (query));
        setSearchResults(result);
    };

    return (
        <taskViewStyles.Wrapper>

            <taskViewStyles.SearchDiv>
                <taskViewStyles.ResultCountHolder>
                    <taskViewStyles.ResultCount>
                        {searchResults.length} {searchResults.length > 1 ? "Members" : "Member"}
                    </taskViewStyles.ResultCount>
                </taskViewStyles.ResultCountHolder>
                <taskViewStyles.SearchFieldHolder>
                    <taskViewStyles.SearchQueryInput
                        type="search"
                        onChange={searchMemberByName}
                        placeholder="Search member by name" />
                    <taskViewStyles.SearchFilterBy onChange={searchMemberByRole}>
                        <option value="" selected disabled hidden>Search by Role</option>
                        {roles.map(e => {
                            return (
                                <option key={e} value={e}>{e}</option>
                            )
                        })}
                    </taskViewStyles.SearchFilterBy>
                </taskViewStyles.SearchFieldHolder>
            </taskViewStyles.SearchDiv>

            <div>
                {searchResults.map(member => {
                    return (
                        <ProfileCard member={member} />
                    )
                })}
            </div>
        </taskViewStyles.Wrapper>
    )
}
