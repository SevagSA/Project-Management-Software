import { useState } from 'react'
import activityViewStyles from "../Activity/ViewActivity/Styles"
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
        <activityViewStyles.Wrapper>

            <activityViewStyles.SearchDiv>
                <activityViewStyles.ResultCountHolder>
                    <activityViewStyles.ResultCount>
                        {searchResults.length} {searchResults.length > 1 ? "Members" : "Member"}
                    </activityViewStyles.ResultCount>
                </activityViewStyles.ResultCountHolder>
                <activityViewStyles.SearchFieldHolder>
                    <activityViewStyles.SearchQueryInput
                        type="search"
                        onChange={searchMemberByName}
                        placeholder="Search member by name" />
                    <activityViewStyles.SearchFilterBy onChange={searchMemberByRole}>
                        <option value="" selected disabled hidden>Search by Role</option>
                        {roles.map(e => {
                            return (
                                <option key={e} value={e}>{e}</option>
                            )
                        })}
                    </activityViewStyles.SearchFilterBy>
                </activityViewStyles.SearchFieldHolder>
            </activityViewStyles.SearchDiv>

            <div>
                {searchResults.map(member => {
                    return (
                        <ProfileCard member={member} />
                    )
                })}
            </div>
        </activityViewStyles.Wrapper>
    )
}
