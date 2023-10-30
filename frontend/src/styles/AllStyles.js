import styled from "@emotion/styled";

export const TodoDiv = styled.div`
  color: black;
`;
export const Title = styled.div`
  width: 60%;
  padding: 20px;
  background-color: #03543f;
  font-size: 32px;
  color: white;
  font-weight: bold;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 0.5rem;
  margin-bottom: 20px;
  font-family: Shadows Into Light;
  box-shadow: 10px 10px 10px 0 #16a34a;
`;

export const AddForm = styled.form`
  margin: 20px;
`;

export const AddTodoInput = styled.input`
  width: 30%;
  height: 2.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 1rem;
  color: #718096;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  outline: none;
`;

export const DeleteButton = styled.button`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #b91c1c;
  &:hover {
    background-color: #991b1b;
  }
`;
export const EditButton = styled.button`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #fbbf24;
  &:hover {
    background-color: #f59e0b;
  }
`;

export const SaveButton = styled.button`
padding-top: 0.625rem;
padding-bottom: 0.625rem; 
padding-left: 1.25rem;
padding-right: 1.25rem; 
margin-right: 0.5rem; 
margin-bottom: 0.5rem; 
border-radius: 0.5rem; 
font-size: 0.875rem;
line-height: 1.25rem; 
font-weight: 500; 
text-align: center; 
color: #ffffff; 
background-image: background-image: linear-gradient(to right, var(--tw-gradient-stops)); 
background-color: #34D399; 
background-color: #10B981; 
background-color: #059669; 
&:hover {
 background-image: background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); 
 }
`;

export const CancelButton = styled.button`
  display: inline-block;
  outline: none;
  border-width: 0px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: inherit;
  font-weight: 500;
  max-width: 100%;
  text-align: center;
  text-decoration: none;
  transition: background 0.1s ease-out 0s,
    box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  background: rgb(0, 82, 204);
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  padding: 0px 12px;
  vertical-align: middle;
  width: auto;
  font-size: 14px;
  color: rgb(255, 255, 255);
  &:hover {
    background: rgb(0, 101, 255);
    text-decoration: inherit;
    transition-duration: 0s, 0.15s;
    color: rgb(255, 255, 255);
  }
`;

export const TodoItem = styled.span`
  color: white;
  font-size: 18px;
`;
