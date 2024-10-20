export function Field({ Name, InitialValue }) {
	this.Name = Name;
	this.InitialValue = InitialValue;
	this.Value = (formik) => formik.getFieldProps(this.Name).Value;
	this.getMeta = (formik)=>  formik.getFieldMeta(this.Name)
	this.getProps = (formik) => formik.getFieldProps(this.Name)
 
}


export function getInitialValues(fields) {
	let dic = {}
	for (var f in fields) {
		dic[fields[f].Name] = fields[f].InitialValue
	}
	return dic;
}