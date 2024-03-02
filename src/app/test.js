
<Form name={name}>
  {({ first }) => (
	<Form.Check
	  type="checkbox"
	  value="firstValue"
	  checked={first.value}
	/>
  )}
  {({ second }) => (
	<Form.Check
	  type="checkbox"
	  value="secondValue"
	  checked={second.value}
	/>
  )}
</Form>
