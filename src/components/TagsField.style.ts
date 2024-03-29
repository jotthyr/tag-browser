import styled from '@emotion/styled';

export const OuterTagsWrapper = styled('div')`
    border: 1px solid black;
    border-radius: 16px;
    overflow: hidden;
    margin :16px 0px;
`;

export const TagsWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    border-radius: 16px;
    padding: 32px 8px;
    height: 500px;
    overflow: auto;
    overflow-x: hidden;
`;

export const LoadingStatementWrapper = styled('div')`
    position: absolute;
    align-self: center;
    margin: 0px 315px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
