import styles from "./Styles";

export default function GlobalSearchBar() {
    return (
        <styles.Wrapper>
            <styles.SearchInput type="search" placeholder="Search anything..." />
            <styles.SubmitInput type="submit" value="Search" />
        </styles.Wrapper>
    )
}
